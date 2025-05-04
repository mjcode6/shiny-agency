import { useParams, Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const question = parseInt(questionNumber);
  const previousQuestion = question > 1 ? question - 1 : 1;
  const nextQuestion = question + 1;

  return (
    <div>
      <h2>Question {question}</h2>

      <div>
        <Link to={`/survey/${previousQuestion}`}>Précédent</Link>

        {question < 10 ? (
          <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </div>
    </div>
  );
}

export default Survey;
