import { useState, useEffect, memo } from 'react'
import { getSummarization } from '../../api/axios';
import { TabComponent } from '../TabComponent/TabComponent'

export const ResultItem = memo(({ data, onReady }) => {


  const [short, setIsShort] = useState(null);
  const [long, setIsLong] = useState(null);

  useEffect(() => {
    shortSummaryummaryHandler(data);
    longSummaryummaryHandler(data);
    return data
  }, [])

  const onReadyHandler = (isReady) => {
    onReady(isReady)
  }

  const shortSummaryummaryHandler = async (data) => {
    try {
      const { short_summary } = await (await getSummarization(data)).data.article;
      setIsShort(short_summary);
    } catch (err) {
      console.error(err);
    }
  }

  const longSummaryummaryHandler = async (data) => {
    try {
      const { long_summary } = await (await getSummarization(data, 'long')).data.article;
      setIsLong(long_summary);
      onReadyHandler(true);
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <TabComponent short={short} long={long} />
    </>
  )
})

