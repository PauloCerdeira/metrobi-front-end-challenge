const questions = [
    'question-01',
    'question-02',
    'question-03',
    'question-04',
    'question-05',
    'question-06',
    'question-07',
  ]

export default function Home() {
  return (
    <>
      <h1>Front-end Challenge</h1>
      <ul>
        {questions.map((path, index) => (
          <li key={index}>
            <a key={index} href={path} > {`Question ${index + 1}`} </a>
          </li>
        ))}
      </ul>
    </>
  );
}
