import React from 'react'
import { WebView } from 'react-native-webview'

const appURL = 'https://ml-coding-challenge-recommendation-system.streamlit.app'

const Streamlit = () => <WebView source={{ uri: appURL }} style={{ flex: 1 }} />

export default Streamlit
