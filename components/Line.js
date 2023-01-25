import Image from 'next/image';
function Line(){
    return(
        <section style={{float: "left", marginLeft: -100}}>
            <div style={{ width: 1,  height: 191, backgroundColor:"white"}} ></div>
            <div style={{marginLeft: -14, marginTop: 4}}><Image width={32} height={112} src="/img/hha2.png" /></div>
        </section>
    )
}
export default Line;
