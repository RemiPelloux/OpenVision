
/* Address: 0x180010910; Evidence: ev_c706b057af15b1e3d48d558257a312b5f0b68edabb9545bd436ba6a9610cc059 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8 FUN_180010910(undefined8 param_1)

{
  undefined8 uVar1;
  byte bVar2;
  code *pcVar3;
  
  bVar2 = (byte)DAT_180027000 & 0x3f;
  pcVar3 = (code *)((DAT_180028c38 ^ DAT_180027000) >> bVar2 |
                   (DAT_180028c38 ^ DAT_180027000) << 0x40 - bVar2);
  if (pcVar3 == (code *)0x0) {
    return 0;
  }
  uVar1 = (*pcVar3)(param_1);
  return uVar1;
}

