const Lion = (team) => {
    return (
          <div className='team'>
              <h2 >{team}</h2>
          </div>
    )
  }
  Lion.defaultProps = {
      team: 'Nashville Stone Lions',
      color1: 'Black',
      color2: 'Gold',
      color3: 'DarkGreen',
      gameLocation: 'Vanderbilt: 441 21st Ave, Nashville, TN 37216',
      logo: './footer_logo.png'
  }
  
  
  export default Lion