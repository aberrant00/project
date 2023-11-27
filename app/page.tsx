import Head from 'next/head';
export default function Home() {
  return (
<>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Inter:wght@100&display=swap" rel="stylesheet" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
</head>



  <div className="panel">
 <div className="controls">
<div className="numbers">
		<div className="balance">
			<p className="balance">Balance</p>
			<p className="march">March 16</p>
			<p className="total">1.684,33 $</p>

  </div>
<div className="position">
<div className="income"><p className="balance">Income</p><p className="subtotal">1.322,10 $</p></div>
<div className="expense"><p className="balance">Expense</p><p className="subtotal">1.110,25 $</p></div>
</div>
 </div> 

  </div>
  </div>

</>
  );
}
