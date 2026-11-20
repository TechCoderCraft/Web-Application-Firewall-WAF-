const argon2 = require("argon2");


async function createHash(password) {
  const pepperSecret = process.env.HashPassphase;
  try {

 const hash = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 65536, 
  timeCost: 3,
  parallelism: 2, 
  hashLength: 32,
  saltLength: 16,
  secret: Buffer.from(pepperSecret, "utf8")
  });

  return hash;

  } catch(error) {
    console.error(error);
    return false;
  }
}





async function verifyHash(password, storedHash) {
  const pepperSecret = process.env.Argon2Passphase;

  try {
    const verified = await argon2.verify(
      storedHash,
      password, {
        secret: Buffer.from(pepperSecret, "utf8")
      }
    )
    return verified; // true or false
  } catch (error) {
    console.error(error);
    return false;
  }

}

module.exports = {
  createHash, 
  verifyHash
}