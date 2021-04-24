import { analysis} from '../src/client/js/analysisText.js'
import {viewData} from '../src/client/js/viewData.js'

//for style
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import '/src/client/image/LogoMeaningCloud210x85.png'

window.addEventListener('DOMContentLoaded' , () => {
    const analysisBtn = document.getElementById('btn')
    analysisBtn.addEventListener('click' , () => {
        Client.analysis()
    })
})




export{
    analysis,
    viewData
}


