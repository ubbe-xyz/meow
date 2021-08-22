import * as React from 'react'
import { useRouter } from 'next/router'
import formatRelative from 'date-fns/formatRelative'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { AssociationLabel } from '../../modules/design-system'
import {
  Author,
  Box,
  DetailHeader,
  Emoji,
  Loading,
  PageWrap,
} from '../../modules/design-system'
import { useFetchNotification } from '../../queries/useFetchNotification'
import { MetaBlock } from '../../modules/design-system/MetaBlock/MetaBlock'

export default function Story() {
  const router = useRouter()
  const { data } = useFetchNotification(router.query.id as string)

  const retrievedDate = data?.created_at ? parseISO(data?.created_at) : ''

  const creationDate = retrievedDate
    ? format(retrievedDate, 'do MMMM yyyy')
    : ''

  const creationDateRelative = retrievedDate
    ? formatRelative(retrievedDate, Date.now(), {
        weekStartsOn: 1,
      })
    : ''

  return (
    <PageWrap>
      {!data ? (
        <Loading />
      ) : (
        <>
          <DetailHeader>
            <DetailHeader.Title>{data.title}</DetailHeader.Title>
          </DetailHeader>
          <div className="flex flex-row justify-center items-center text-base text-grey relative mt-6">
            <Author
              name={data?.user?.login}
              avatar={data?.user?.avatar_url}
              href={data?.user?.url}
              className="mr-1"
            />
            <span>
              • {creationDate} •{' '}
              {!data?.comments || data?.comments === 0
                ? 'No comments'
                : data?.comments === 1
                ? '1 comment'
                : `${data?.comments} comments`}
            </span>
          </div>
          <Box
            className="mt-16"
            renderHeader={() => (
              <span className="text-sm flex items-baseline">
                <Author
                  name={data?.user?.login}
                  avatar={data?.user?.avatar_url}
                  href={data?.user?.url}
                  className="mr-1"
                  size="small"
                />
                <AssociationLabel
                  variant={data?.author_association}
                  className="mx-2"
                />
                <span className="text-grey">– {creationDateRelative}</span>
                <Emoji aria-label="chat emoji">💭</Emoji>
              </span>
            )}
          >
            <MetaBlock html={data?.body} />
          </Box>
        </>
      )}
    </PageWrap>
  )
}
