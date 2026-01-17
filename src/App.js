import { useEffect, useState } from 'react';
import "./App.css"

function Header(){
  return(
    <div>
      <h1 className='aboutme'>Hakkımda</h1>
      <div className='about'>
        <div className='about_text'>
          <p className='aboutme_paragraph'>Ben Ali Kaan Büke. Backend geliştirme alanına odaklanan bir lise öğrencisiyim. Sunucu tarafı yazılımlar, API yapıları ve uygulamaların arka plandaki işleyişi üzerine çalışmalar yapıyorum. Backend mimarisini, veri akışını ve sistemlerin nasıl ölçeklendiğini anlamaya ve uygulamaya odaklanıyorum.</p>
          <p className='aboutme_paragraph'>Hedefim backend tarafında derinleşerek, sağlam ve sürdürülebilir sistemler geliştirebilecek seviyeye ulaşmak.</p>
        </div>
        {/*<img src='\images\5.png' className='image1'></img>*/}
      </div>
    </div>
  )
}

function Theme(){
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.body.className = mode;
  }, [mode])

  return(
    <div>
      <button onClick={() => mode === "dark" ? setMode("light") : setMode("dark")}>{mode}</button>
    </div>
  )
}

function App(){
  return(
    <div>
      <Header />
    </div>
  )
}

export default App;