import { useState } from 'react';
import { InputItem } from '../InputItem/InputItem';
import { Header } from '../Header/Header';
import { ResultItem } from '../Result/ResultItem';
import { ResultContentExpand } from '../Result/ResultContent/ResultContentExpand';
import { ResultContent } from '../Result/ResultContent/ResultContent';
import { Error } from '../Error/Error';

export const MainApp = () => {

  const [url, setUrl] = useState('');
  const [fullText, setFullText] = useState('');
  const [isError, setIsError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const urlHandler = (newUrl) => {
    console.log(newUrl, url);
    if (url !== newUrl) {
      resetState()
      setUrl(newUrl);
    }
  }

  const resetState = () => {
    setUrl('')
    setFullText('')
    setIsError(false);
    setIsReady(false)
  }

  const fullTextHandler = (text) => {
    setFullText(text)
  }

  const errorResponseHandler = (error) => {
    if (error) {
      setIsReady(true)
    }
    setIsError(error);
  }

  const onReadyHandler = (result) => {
    setIsReady(result)
  }

  return (
    <>
      <Header />
      <InputItem onArticleLink={urlHandler} onReady={onReadyHandler} isReady={isReady} />
      {isError ?
        <Error message={'Please reload page'} /> :
        <>
          {url &&
            <>
              <ResultContentExpand articleUrl={url} onText={fullTextHandler} title={'Full text'} onError={errorResponseHandler} />
              {fullText && <ResultContent data={fullText} title={'Key Terms'} />}
              {fullText && < ResultItem data={fullText} onReady={onReadyHandler} />}
            </>}
        </>
      }
    </>
  )
}


