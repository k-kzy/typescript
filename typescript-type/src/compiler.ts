let globalHello = 'hello'
function echo(message: string): string | null {
  if (message) {
    return message;
  }
  return;
}
let implicitAny;
implicitAny = 'implicitAny'

let nullableMessage = echo('hi')
let undefinedableMessage: string | undefined = undefined
let onlyNull: null | undefined = undefined
let onlyUndefined: undefined = undefined
if (nullableMessage) {
  nullableMessage.toUpperCase();
}

//echo(null, 'hi')