
/* Address: 0x18000e05c; Evidence: ev_d3da7063875d2b1630028c6b64a6d2e8a58f4c1003678433d94d589d7746f355 */

bool FUN_18000e05c(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000e044();
  if ((char)uVar1 == '\0') {
    FUN_18000febc(local_res8);
  }
  return local_res8[0] != 1;
}

