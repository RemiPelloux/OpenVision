
/* Address: 0x18000a640; Evidence: ev_4c328437e9349093295688434f5dd402934ef13766cac06475a129d49f1edab1 */

/* Library Function - Single Match
    _set_new_handler
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

ulonglong _set_new_handler(ulonglong param_1)

{
  byte bVar1;
  byte bVar2;
  ulonglong uVar3;
  
  __acrt_lock(0);
  bVar2 = (byte)DAT_180027000 & 0x3f;
  uVar3 = DAT_180027000 ^ DAT_1800282c8;
  bVar1 = 0x40 - bVar2 & 0x3f;
  DAT_1800282c8 = (param_1 >> bVar1 | param_1 << 0x40 - bVar1) ^ DAT_180027000;
  __acrt_unlock(0);
  return uVar3 >> bVar2 | uVar3 << 0x40 - bVar2;
}

