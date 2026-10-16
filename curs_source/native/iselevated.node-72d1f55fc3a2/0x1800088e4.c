
/* Address: 0x1800088e4; Evidence: ev_758ba0f17bcea2d57323c57ffbf0ff1a78fcd422e5092cb2b808de95d0decd8b */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x0001800088e4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}

