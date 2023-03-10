# ReactLearning-4

Advanced: Handling Side Effects, Using Reducers & using Content API

useEffect:

@ useEffect(() => {
const identifier = setTimeout(() => {
console.log('siema');
setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
}, 500);

    	return () => {
    		console.log('CLEANUP');
    		clearTimeout(identifier);
    	};
    }, [enteredEmail, enteredPassword]);

Ten useEffect jest używany w celu sprawdzenia, czy formularz jest poprawnie wypełniony. Wykorzystuje funkcję setTimeout, aby opóźnić sprawdzenie formularza o pół sekundy, po tym jak użytkownik wprowadzi dane.

useEffect przyjmuje dwa argumenty: pierwszy to funkcja, która zostanie wywołana po tym, jak komponent zostanie zamontowany lub po zmianie jednego z zależności podanych jako drugi argument do useEffect. W tym przypadku, funkcja ta zawiera kod, który ustawia wartość formIsValid na podstawie wprowadzonych wartości enteredEmail i enteredPassword.

Drugim argumentem przekazanym do useEffect jest tablica zależności. W tym przypadku, useEffect zostanie wywołany tylko wtedy, gdy wartość enteredEmail lub enteredPassword zostanie zmieniona.

Ponadto, w tym useEffect używany jest mechanizm "cleanup" poprzez zwrócenie funkcji z tej funkcji, która jest zwracana przez useEffect. Funkcja ta zostanie wywołana, gdy komponent zostanie odmontowany lub gdy wartości enteredEmail lub enteredPassword ulegną zmianie. Funkcja ta służy do czyszczenia lub anulowania wszystkich działań wykonanych przez useEffect w momencie, gdy już nie są potrzebne, a także do zapobiegania wyciekom pamięci. W tym przypadku, funkcja ta jest używana do anulowania funkcji setTimeout, aby uniknąć wykonywania jej, gdy już nie jest potrzebna. W tym celu, wywołuje funkcję clearTimeout, która anuluje wywołanie funkcji przekazanej do setTimeout i usuwa wszelkie związane z nią zdarzenia z kolejki wywołań. W tym przypadku, jest to wywołanie console.log('CLEANUP'), które informuje o tym, że "cleanup" został wykonany.
