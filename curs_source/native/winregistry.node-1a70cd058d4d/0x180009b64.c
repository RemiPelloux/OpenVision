
/* Address: 0x180009b64; Evidence: ev_fd60d4d15a85986c692bef66dd660c462249b1c44daf3e398dbce1b808d38ca9 */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x000180009b64. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}

