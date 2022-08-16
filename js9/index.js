const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve();
    } else {
      reject();
    }
  });
};

const doubleCheck = () => {
  return new Promise((resolve) => {
    console.log("Checking...");
    setTimeout(() => {
      resolve("Jest OK");
    }, 1000);
  });
};

async function test() {
  try {
    await checkAge(20);
    console.log("Not sure");
    await doubleCheck();
    console.log("Good for sure");
    console.log("Verification is finished.");
  } catch {
    console.log("Not OK");
  }
}

test()