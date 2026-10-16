
/* Address: 0x18000ff64; Evidence: ev_87d1f0ebe09456ee3e05393135ec50093859e692c604bfc66429b3902598d76c */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000ff64. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}

