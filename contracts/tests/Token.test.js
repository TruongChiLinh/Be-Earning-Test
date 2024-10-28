const Token = artifacts.require("Token");

contract("Token", (accounts) => {
  it("should put initial supply in the first account", async () => {
    const instance = await Token.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.toNumber(), 1000000, "Initial supply wasn't in the first account.");
  });

  it("should transfer tokens between accounts", async () => {
    const instance = await Token.deployed();
    await instance.transfer(accounts[1], 100, { from: accounts[0] });
    const balance1 = await instance.balanceOf(accounts[1]);
    assert.equal(balance1.toNumber(), 100, "Amount wasn't correctly sent to receiver.");
  });
});
