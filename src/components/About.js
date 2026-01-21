export function About(){
  return(
    <section id="about">
        <h1 className='aboutme'>Hakkımda</h1>
        <div className='about'>
            <div className='about_text'>
            <p className='aboutme_paragraph'>Ben Ali Kaan Büke. Backend geliştirme alanına odaklanan bir lise öğrencisiyim. Sunucu tarafı yazılımlar, API yapıları ve uygulamaların arka plandaki işleyişi üzerine çalışmalar yapıyorum. Backend mimarisini, veri akışını ve sistemlerin nasıl ölçeklendiğini anlamaya ve uygulamaya odaklanıyorum.</p>
            <p className='aboutme_paragraph'>Hedefim backend tarafında derinleşerek, sağlam ve sürdürülebilir sistemler geliştirebilecek seviyeye ulaşmak.</p>
            </div>
            <img src='\images\compImg.png' className='image1'></img>
      </div>
    </section>
  )
}

export default About;