
import heroImage from './components/img/illustration-hero.svg';
import PaymentButton from './components/buttonPaymenth';
import CancelButton from './components/buttonCancel';
import AnnualPlan from './components/mainbox';
import './App.css';

function App() {
  return (
    <div className="card-container">      <img className="card-image" src={heroImage} alt="Hero" />
      <div className="card">

        <div className="card-body">
          <h2 className="card-title">Order Summary</h2>
          <p className="card-text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className="plan-details">
            <AnnualPlan />
          </div>
          <br />
          <div className="action-buttons">
            <PaymentButton />
            <CancelButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
