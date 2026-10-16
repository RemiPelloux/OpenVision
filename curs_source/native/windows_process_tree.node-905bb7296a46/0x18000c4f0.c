
/* Address: 0x18000c4f0; Evidence: ev_d4ef2030096764c1d5688bfbc7265f371638935b6335a7cc989c55dfa4a79214 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180023000 & 0x3f;
  uVar3 = DAT_180023000 ^ DAT_1800242f0;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800242f0 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180023000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

