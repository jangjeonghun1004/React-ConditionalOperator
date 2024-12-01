
function Fruit() {
    const fruits = ["apple", "banna", "walter melon"];

  return (
    <ul>
        {fruits.map((fruit, index) => (<li id={index}>{index}: {fruit}</li>))}
    </ul>
  )
}

export default Fruit