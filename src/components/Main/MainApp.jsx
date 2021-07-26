import { InputItem } from '../InputItem/InputItem';
import { Header } from '../Header/Header';
import { ResultItem } from '../Result/ResultItem';
import { ResultContentExpand } from '../Result/ResultContent/ResultContentExpand';
import { useState } from 'react';
import { Loader } from '../UI/Loader/Loader';
import { TabComponent } from '../TabComponent/TabComponent';
import { SummarizationComponent } from '../SummarizationComponent/SummarizationComponent';

export const MainApp = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [keyTerms, setKeyTerms] = useState([]);
  const [shortSummary, setShortSummary] = useState(null);
  const [longSummary, setLongSummary] = useState(null);


  const postInfo = (text, title) => {
    setData(null);
    setIsLoading(true);
    dataHandler(text, title)

  }

  const keyTermsDataHandler = (data) => {
    console.log(typeof data, data);
    setKeyTerms(data)
  }

  /* onShortSummary */
  const shortSummaryHandler = (data) => {
    setShortSummary(data)
  }

  const longSummaryHandler = (data) => {
    setLongSummary(data)
  }

  const dataHandler = (text, title) => {
    if (text) {
      setIsLoading(false);
      setData({ text, title })
    }
  }

  return (
    <>
      <Header />
      <InputItem onClick={postInfo} onKeyTerms={keyTermsDataHandler} onShortSummary={shortSummaryHandler} onLongSummary={longSummaryHandler} />
      {isLoading && <Loader />}
      {data && <ResultContentExpand title={data.title} content={data.text} />}
      {data && <ResultContentExpand isExpand={true} title={"Key Terms"} content={keyTerms.join(", ")} />}
      {data && <ResultItem shortData={shortSummary} longData={longSummary} />}
    </>
  )
}