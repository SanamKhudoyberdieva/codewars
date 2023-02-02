// Not mine
const DNAStrand = dna => dna.split('').map(l => l === 'A' ? 'T' : l === 'T' ? 'A' : l === 'G' ? 'C' : l === 'C' ? 'G' : '').join('');


const mapping = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
};

const DNA_strand = seq =>
    seq
    .split('')
    .map(x => mapping[x])
    .join('');