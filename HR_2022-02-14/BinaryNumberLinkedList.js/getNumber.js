function getNumber(binary) {
    // Write your code here
    console.log(binary)
    let total = 0n;
    while (binary !== null) {
        total *= 2n;
        total += BigInt(binary.data);
        binary = binary.next;
    }
    return total;

}