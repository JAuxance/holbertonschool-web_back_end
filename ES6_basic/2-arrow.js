/**
 * Constructor-style function attaching a neighborhoods list and an
 * arrow-function `addNeighborhood` method that preserves the enclosing `this`.
 * @this {{ sanFranciscoNeighborhoods: string[], addNeighborhood: (n: string) => string[] }}
 */
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    this.addNeighborhood = (newNeighborhood) => {
        this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };
}
