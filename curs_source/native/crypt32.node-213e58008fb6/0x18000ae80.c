
/* Address: 0x18000ae80; Evidence: ev_bc886fa6fe4e5697ae44b74ce1d1ae2d64eec039d3eee0b62bfdfa5a295a2160 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180021000 & 0x3f;
  uVar3 = DAT_180021000 ^ DAT_1800222f0;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800222f0 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180021000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

