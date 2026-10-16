
/* Address: 0x18001165c; Evidence: ev_0b47d12b8cad801722a63024ecb4481f45968f95eb29dc1e435af4ff114e4f2a */

/* Library Function - Single Match
    __acrt_unlock
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

void __acrt_unlock(int param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00018001166e. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  LeaveCriticalSection(&DAT_1800295b0 + (longlong)param_1 * 0x28);
  return;
}

