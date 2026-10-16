
/* Address: 0x18000e888; Evidence: ev_19c672ae4c1372ac2c1cc45041054a085e44279495c90e23146751dfbe0d91a9 */

bool FUN_18000e888(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000e870();
  if ((char)uVar1 == '\0') {
    FUN_18000c1fc(local_res8);
  }
  return local_res8[0] != 1;
}

