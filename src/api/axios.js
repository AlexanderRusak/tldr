import axios from 'axios';
import { API_LINK, API_LINK_KEYTERMS, API_LINK_SUMMARIZATION } from './link';


export const getArticleText = async (articleUrl) => {
  try {
    const response = await axios.post(API_LINK,
      {
        'article_url': `${articleUrl.trim()}`
      },
      {
        method: 'POST',
      }
    )
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getKeyTermsExtraction = async (fullText) => {
  try {
    const response = await axios.post(API_LINK_KEYTERMS,
      {
        'text': `${fullText.trim()}`
      },
      {
        method: 'POST',
      }
    )
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getSummarization = async (fullText, mode = 'short') => {
  try {
    const response = await axios.post(API_LINK_SUMMARIZATION,
      {
        'text': `${fullText.trim()}`,
        "summary_version": mode
      },
      {
        method: 'POST',
      }
    )
    return response;
  } catch (err) {
    console.error(err);
  }
}



