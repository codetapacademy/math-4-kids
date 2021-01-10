import React from 'react'
import { render } from 'react-dom'

import './index.css'
import { Math4Kids } from './component/app'

const app = <Math4Kids />
const here = document.querySelector('#here')

render(app, here)
