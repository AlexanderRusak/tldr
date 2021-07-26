import { InputItem } from '../InputItem/InputItem';
import { Header } from '../Header/Header';
import { ResultItem } from '../Result/ResultItem';
import { ResultContentExpand } from '../Result/ResultContent/ResultContentExpand';
import { useState } from 'react';
import { Loader } from '../UI/Loader/Loader';
import { TabComponent } from '../TabComponent/TabComponent';
import { SummarizationComponent } from '../SummarizationComponent/SummarizationComponent';
import { ResultContent } from '../Result/ResultContent/ResultContent';

export const MainApp = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [keyTerms, setKeyTerms] = useState([]);
  const [shortSummary, setShortSummary] = useState(null);
  const [longSummary, setLongSummary] = useState(null);


  const [url, setUrl] = useState('');
  const [fullText, setFullText] = useState('')

  const urlHandler = (url) => {
    setUrl(url)
    console.log(url);
    setIsLoading(true)
  }

  const fullTextHandler = (text) => {
    setFullText(text)
  }

  ////////////

  const postInfo = (text, title) => {
    setData(null);
    setIsLoading(true);
    dataHandler(text, title)
  }

  const keyTermsDataHandler = (data) => {
    console.log(typeof data, data);
    setKeyTerms(data)
  }


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
      <InputItem onClick={postInfo} onArticleLink={urlHandler} onKeyTerms={keyTermsDataHandler} onShortSummary={shortSummaryHandler} onLongSummary={longSummaryHandler} />
      {url && <ResultContentExpand articleUrl={url} onText={fullTextHandler} title={'Full text'} />}
      {fullText && url && <ResultContent data={fullText} title={'Key Terms'} />}
      {fullText && url && < ResultItem shortData={shortSummary} longData={longSummary} />}
    </>
  )
}


