
/* Address: 0x18000cc6c; Evidence: ev_6e2745c163501caf2796558d338adf0998760fb0c5c3371d4dbe508e1df4c5e0 */

bool FUN_18000cc6c(void)

{
  uint uVar1;
  int local_res8 [8];
  
  local_res8[0] = 0;
  uVar1 = FUN_18000cc54();
  if ((char)uVar1 == '\0') {
    FUN_18000eacc(local_res8);
  }
  return local_res8[0] != 1;
}

