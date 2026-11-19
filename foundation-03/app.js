const Yonko = (props)=>{
 return (
 <>
 <h1>{props.captain}</h1>
 <h2>{props.crewname}</h2>
 <h3>{props.bounty}</h3>
 </>
 );
}

const App = () =>{
 return (
 <>
 <h1>Yonko</h1>
 <Yonko captain="Shanks" crewname="Red Hair Pirates" bounty="4,048,900,000 Berries"/>
 <Yonko captain='Whitebeard' crewname='Whitebeard Pirates' bounty='5,046,000,000 Berries'/>
 <Yonko captain="Kaido" crewname="Beasts Pirates" bounty="4,611,100,000 Berries"/>
 <Yonko captain="Blackbeard" crewname="Blackbeard Pirates" bounty="3,996,000,000 Berries"/>
 </>
 );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);