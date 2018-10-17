const story = {
  firstName: "Sarah",
  lastName: "Hailey",
  dateOfEvent: "12345",
  eventDetails: `Finding duplicate records
Main article: Hash table
When storing records in a large unsorted file, one may use a hash function to map each record to an index into a table T, and to collect in each bucket T[i] a list of the numbers of all records with the same hash value i. Once the table is complete, any two duplicate records will end up in the same bucket. The duplicates can then be found by scanning every bucket T[i] which contains two or more members, fetching those records, and comparing them. With a table of appropriate size, this method is likely to be much faster than any alternative approach (such as sorting the file and comparing all consecutive pairs).

Protecting data
Main article: Security of cryptographic hash functions
A hash value can be used to uniquely identify secret information. This requires that the hash function is collision-resistant, which means that it is very hard to find data that will generate the same hash value. These functions are categorized into cryptographic hash functions and provably secure hash functions. Functions in the second category are the most secure but also too slow for most practical purposes. Collision resistance is accomplished in part by generating very large hash values. For example, SHA-2, one of the most widely used cryptographic hash functions, generates 256-bit values.

Finding similar records
Main article: Locality sensitive hashing
Hash functions can also be used to locate table records whose key is similar, but not identical, to a given key; or pairs of records in a large file which have similar keys. For that purpose, one needs a hash function that maps similar keys to hash values that differ by at most m, where m is a small integer (say, 1 or 2). If one builds a table T of all record numbers, using such a hash function, then similar records will end up in the same bucket, or in nearby buckets. Then one need only check the records in each bucket T[i] against those in buckets T[i+k] where k ranges between −m and m.

This class includes the so-called acoustic fingerprint algorithms, that are used to locate similar-sounding entries in large collection of audio files. For this application, the hash function must be as insensitive as possible to data capture or transmission errors, and to trivial changes such as timing and volume changes, compression, etc.[3]

Finding similar substrings
The same techniques can be used to find equal or similar stretches in a large collection of strings, such as a document repository or a genomic database. In this case, the input strings are broken into many small pieces, and a hash function is used to detect potentially equal pieces, as above.

The Rabin–Karp algorithm is a relatively fast string searching algorithm that works in O(n) time on average. It is based on the use of hashing to compare strings.

Geometric hashing
This principle is widely used in computer graphics, computational geometry and many other disciplines, to solve many proximity problems in the plane or in three-dimensional space, such as finding closest pairs in a set of points, similar shapes in a list of shapes, similar images in an image database, and so on. In these applications, the set of all inputs is some sort of metric space, and the hashing function can be interpreted as a partition of that space into a grid of cells. The table is often an array with two or more indices (called a grid file, grid index, bucket grid, and similar names), and the hash function returns an index tuple. This special case of hashing is known as geometric hashing or the grid method. Geometric hashing is also used in telecommunications (usually under the name vector quantization) to encode and compress multi-dimensional signals.

Standard uses of hashing in cryptography
Main article: Cryptographic hash function
Some standard applications that employ hash functions include authentication, message integrity (using an HMAC (Hashed MAC)), message fingerprinting, data corruption detection, and digital signature efficiency.
`
};
export default story;
