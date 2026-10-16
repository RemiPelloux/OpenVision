
/* Address: 0x18000fa20; Evidence: ev_0132baedf99d1cd1115bf33954c982c9bce95a16b41436818c90f9304423acef */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180028040 & 0x3f;
  uVar3 = DAT_180028040 ^ DAT_180029420;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_180029420 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180028040;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

