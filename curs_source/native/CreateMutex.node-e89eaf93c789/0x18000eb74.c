
/* Address: 0x18000eb74; Evidence: ev_e24faa6ac5e272572ea2a953295187490e3d1993e0a606e853338b9438305960 */

DWORD __stdcall FlsAlloc(PFLS_CALLBACK_FUNCTION lpCallback)

{
  DWORD DVar1;
  
                    /* WARNING: Could not recover jumptable at 0x00018000eb74. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  DVar1 = FlsAlloc(lpCallback);
  return DVar1;
}

