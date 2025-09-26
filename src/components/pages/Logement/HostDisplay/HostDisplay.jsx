import './HostDisplay.scss'

export default function HostDisplay({ hostInfo }) {  
  return (
    <div className="host-wrapper">
      <h3 className="host__name">{ hostInfo.name.split(' ').join('\n') }</h3>
      <img className="host__img" src={ hostInfo.picture }></img>
    </div>
  )
}
