import Header from "../components/Header"
import Primeiro_comp from "../components/Primeiro_comp"


const NewPage = () =>{
    return (
        <div>
            <Header></Header>
            <div className='mapa'>
                <div id='botoes'>
                        <button>Exportar PNG</button>
                        <button>Exportar PDF</button>
                        <button>Exportar CSV</button>
                </div>
                <Primeiro_comp></Primeiro_comp>
            </div>
        </div>

    )
}

export default NewPage