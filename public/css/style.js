import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ---------- 全局样式 ----------
  'body': {
    'width': [{ 'unit': 'px', 'value': 1100 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'a:hover': {
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4fc08d' }]
  },
  'button': {
    'backgroundColor': '#4fc08d !important',
    'color': '#fff !important'
  },
  'avatar': {
    'borderRadius': '3px',
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'float': 'right'
  },
  // ---------- nav ----------
  'nav': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#999',
    'textAlign': 'center'
  },
  'nav h1': {
    'color': '#4fc08d',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  // ---------- nav-setting ----------
  'nav-setting': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 30 }],
    'top': [{ 'unit': 'px', 'value': 35 }],
    'zIndex': '999'
  },
  'nav-setting uidropdownbutton': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#fff !important'
  },
  'nav-setting iconbars': {
    'color': '#000',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  // ---------- post-content ----------
  'post-content h3 a': {
    'color': '#4fc08d !important'
  },
  'post-content tag': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'color': '#999'
  },
  'post-content tagright': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'post-content tagright a': {
    'color': '#999'
  }
});
