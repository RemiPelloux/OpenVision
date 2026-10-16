
/* Address: 0x180009250; Evidence: ev_6454fa4086e161626b6fe32365f8b0894cf3dca2af9c56d786185a15ae28a11c */

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

