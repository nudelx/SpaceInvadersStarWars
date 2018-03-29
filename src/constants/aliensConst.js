const makeAliens = () => {
  console.log("make ALIENS")
  const EMPTY = new Array(45)
  const ALIENS = []
  for (let i = 0; i < EMPTY.length; i++) {
    ALIENS.push(i)
  }
  return ALIENS
}

export const ALIENS = makeAliens()
