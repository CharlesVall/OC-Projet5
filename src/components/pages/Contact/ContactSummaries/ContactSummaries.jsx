import './ContactSummaries.scss'
import Summary from '@/components/commons/Summary/Summary'

export default function ContactList() {
  return (
    <div className="contact__summaries">
      <Summary summaryTitle="Fiabilité"/>
      <Summary summaryTitle="Respect"/>
      <Summary summaryTitle="Service"/>
      <Summary summaryTitle="Sécurité"/>
    </div>
  )
}