
/* Address: 0x1800090a0; Evidence: ev_f8329ac1f1e3e7ccdfab393d0bf05db53c0eb336436d33b9b3169e3e906eba53 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_18001a000 & 0x3f;
  uVar3 = DAT_18001a000 ^ DAT_18001ba88;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_18001ba88 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_18001a000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

