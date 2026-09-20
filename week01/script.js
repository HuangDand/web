const sendCodeBtn = document.getElementById('sendCodeBtn');
const phoneInput = document.getElementById('phoneInput');
const countrySelect = document.getElementById('countrySelect');
const errorMsg = document.getElementById('errorMsg');
const codeArea = document.getElementById('codeArea');
const codeInput = document.getElementById('codeInput');
const submitBtn = document.getElementById('submitBtn');

const blockedPhone = "19032571692";

sendCodeBtn.addEventListener('click', ()=>{
    const phone = phoneInput.value.replace(/\s/g,'');
    if(!phone){
        alert("请输入手机号");
        return;
    }
    if(phone === blockedPhone){
        errorMsg.classList.remove('hidden');
        codeArea.classList.add('hidden');
        return;
    }
    errorMsg.classList.add('hidden');
    codeArea.classList.remove('hidden');
    sendCodeBtn.disabled = true;
    let count = 60;
    let timer = setInterval(()=>{
        sendCodeBtn.innerText = `Resend(${count}s)`;
        count--;
        if(count <=0){
            clearInterval(timer);
            sendCodeBtn.innerText = "Send Verification Code";
            sendCodeBtn.disabled = false;
        }
    },1000);
});

submitBtn.addEventListener('click',()=>{
    const code = codeInput.value;
    if(code.length === 6){
        alert("验证成功！");
    }else{
        alert("请输入6位验证码");
    }
})
