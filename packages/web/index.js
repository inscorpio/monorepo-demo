import axios from "axios"
import { output } from '@linyx/monorepo-demo-utils'

axios.get("http://localhost:6666/").then(res => {
  output(res.data)
})

