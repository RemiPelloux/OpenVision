
/* Address: 0x1800108e0; Evidence: ev_64feb2556297e69876edaecbf4611670ea559d8c38ca68822806bf05898e85e5 */

undefined8 FUN_1800108e0(void)

{
  byte bVar1;
  
  bVar1 = (byte)DAT_180027000 & 0x3f;
  return CONCAT71((int7)(DAT_180027000 >> 8),
                  (DAT_180028c38 ^ DAT_180027000) >> bVar1 != 0 ||
                  (DAT_180028c38 ^ DAT_180027000) << 0x40 - bVar1 != 0);
}

