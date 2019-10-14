import React from 'react';
import { ReactComponent as Hamburger } from "./svg/hamburger.svg";
import { ReactComponent as Cart } from "./svg/cart.svg";
import { ReactComponent as Faq } from "./svg/faq.svg";
import { ReactComponent as Settings } from "./svg/settings.svg";
import { ReactComponent as CreditCard } from "./svg/credit-card.svg";
import { ReactComponent as ListView } from "./svg/list-view.svg";
import { ReactComponent as Document } from "./svg/document.svg";
import { ReactComponent as DocumentO } from "./svg/document-o.svg";
import { ReactComponent as Done } from "./svg/done-2.svg";
import { ReactComponent as Cross } from "./svg/cross.svg";
import { ReactComponent as Whatsapp } from "./svg/whatsapp.svg";
import { ReactComponent as ArrowLeft } from "./svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "./svg/arrow-right.svg";
import { ReactComponent as ArrowDown } from "./svg/arrow-down.svg";
import { ReactComponent as ArrowUp } from "./svg/arrow-up.svg";
import { ReactComponent as User } from "./svg/user.svg";
import { ReactComponent as Search } from "./svg/search.svg";
import { ReactComponent as Check } from "./svg/check.svg";
import { ReactComponent as Help } from "./svg/help.svg";
import { ReactComponent as Gear } from "./svg/gear.svg";
import { ReactComponent as Indian } from "./svg/indian.svg";
import { ReactComponent as Bell } from "./svg/bell.svg";
import { ReactComponent as Smile } from "./svg/smile.svg";
import { ReactComponent as AngleUp } from "./svg/angle-up.svg";
import { ReactComponent as AngleRight } from "./svg/angle-right.svg";
import { ReactComponent as AngleDown } from "./svg/angle-down.svg";
import { ReactComponent as AngleLeft } from "./svg/angle-left.svg";
import { ReactComponent as Calendar } from "./svg/calendar.svg";
import { ReactComponent as Eye } from "./svg/eye.svg";
import { ReactComponent as EyeHide } from "./svg/eye-hide.svg";
import { ReactComponent as RatingStars } from "./svg/rating-stars.svg";
import { ReactComponent as NoImage } from "./svg/no-image.svg";
import { ReactComponent as Info } from "./svg/info.svg";
import { ReactComponent as Logo } from "./svg/logo.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";
import { ReactComponent as Business } from "./svg/business.svg";
import { ReactComponent as Email } from "./svg/email.svg";
import { ReactComponent as Update } from "./svg/update.svg";
import { ReactComponent as Attachment } from "./svg/attachment.svg";
import { ReactComponent as Statistic } from "./svg/statistic.svg";
import { ReactComponent as Pen } from "./svg/pen.svg";
import { ReactComponent as Outgoing } from "./svg/outgoing.svg";
import { ReactComponent as Incoming } from "./svg/incoming.svg";
import { ReactComponent as Play } from "./svg/play.svg";
import { ReactComponent as Waiter } from "./svg/waiter.svg";
import { ReactComponent as Warning } from "./svg/warning.svg";
import { ReactComponent as Pie } from "./svg/pie.svg";
import { ReactComponent as Car } from "./svg/car.svg";
import { ReactComponent as Star } from "./svg/star.svg";
import { ReactComponent as Excel } from "./svg/excel.svg";
import { ReactComponent as Home } from "./svg/home.svg";
import { ReactComponent as Assignment } from "./svg/assignment.svg";
import { ReactComponent as Handshake } from "./svg/handshake.svg";
import { ReactComponent as Customers } from "./svg/customers.svg";
import { ReactComponent as Calls } from "./svg/calls.svg";
import { ReactComponent as Trash } from "./svg/trash.svg";
import { ReactComponent as Storage } from "./svg/storage.svg";
import { ReactComponent as Favorite } from "./svg/favorite.svg";
import { ReactComponent as CartO } from "./svg/cart-o.svg";
import { ReactComponent as EyeO } from "./svg/eye-o.svg";
import { ReactComponent as HeartO } from "./svg/heart-o.svg";
import { ReactComponent as UserO } from "./svg/user-o.svg";
import { ReactComponent as Login } from "./svg/log-in.svg";
import { ReactComponent as Logout } from "./svg/log-out.svg";
import { ReactComponent as Dashboard } from "./svg/dashboard.svg";
import { ReactComponent as Delivery } from "./svg/delivery.svg";
import { ReactComponent as Print } from "./svg/print.svg";
import { ReactComponent as Facebook } from "./svg/facebook.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import { ReactComponent as Vk } from "./svg/vk.svg";
import { ReactComponent as Plus } from "./svg/plus.svg";
import { ReactComponent as Filter } from "./svg/filter.svg";
import * as PropTypes from "prop-types";

function Icon({ name, className, ...props }) {
  switch (name) {
    case 'filter':
      return <Filter className={className} {...props}/>;
    case 'plus':
      return <Plus className={className} {...props}/>;
    case 'facebook':
      return <Facebook className={className} {...props}/>;
    case 'instagram':
      return <Instagram className={className} {...props}/>;
    case 'vk':
      return <Vk className={className} {...props}/>;
    case 'print':
      return <Print className={className} {...props}/>;
    case 'document-o':
      return <DocumentO className={className} {...props}/>;
    case 'delivery':
      return <Delivery className={className} {...props}/>;
    case 'dashboard':
      return <Dashboard className={className} {...props}/>;
    case 'cart-o':
      return <CartO className={className} {...props}/>;
    case 'eye-o':
      return <EyeO className={className} {...props}/>;
    case 'heart-o':
      return <HeartO className={className} {...props}/>;
    case 'user-o':
      return <UserO className={className} {...props}/>;
    case 'favorite':
      return <Favorite className={className} {...props}/>;
    case 'trash':
      return <Trash className={className} {...props}/>;
    case 'storage':
      return <Storage className={className} {...props}/>;
    case 'calls':
      return <Calls className={className} {...props}/>;
    case 'customers':
      return <Customers className={className} {...props}/>;
    case 'handshake':
      return <Handshake className={className} {...props}/>;
    case 'assignment':
      return <Assignment className={className} {...props}/>;
    case 'home':
      return <Home className={className} {...props}/>;
    case 'excel':
      return <Excel className={`excel-icon ${className ? className : ''}`} {...props}/>;
    case 'star':
      return <Star className={className} {...props}/>;
    case 'car':
      return <Car className={className} {...props}/>;
    case 'pie':
      return <Pie className={className} {...props}/>;
    case 'warning':
      return <Warning className={className} {...props}/>;
    case 'logo':
      return <Logo className={className} {...props}/>;
    case 'waiter':
      return <Waiter className={className} {...props}/>;
    case 'play':
      return <Play className={className} {...props}/>;
    case 'outgoing':
      return <Outgoing className={className} {...props}/>;
    case 'incoming':
      return <Incoming className={className} {...props}/>;
    case 'pen':
      return <Pen className={className} {...props}/>;
    case 'statistic':
      return <Statistic className={className} {...props}/>;
    case 'attachment':
      return <Attachment className={className} {...props}/>;
    case 'log-in':
      return <Login className={className} {...props}/>;
    case 'log-out':
      return <Logout className={className} {...props}/>;
    case 'update':
      return <Update className={className} {...props}/>;
    case 'email':
      return <Email className={className} {...props}/>;
    case 'phone':
      return <Phone className={className} {...props}/>;
    case 'business':
      return <Business className={className} {...props}/>;
    case 'info':
      return <Info className={className} {...props}/>;
    case 'no-image':
      return <NoImage className={className} {...props}/>;
    case 'rating-stars':
      return <RatingStars className={className} {...props}/>;
    case 'eye':
      return <Eye className={className} {...props}/>;
    case 'eye-hide':
      return <EyeHide className={className} {...props}/>;
    case 'calendar':
      return <Calendar className={className} {...props}/>;
    case 'angle-up':
      return <AngleUp className={className} {...props}/>;
    case 'angle-right':
      return <AngleRight className={className} {...props}/>;
    case 'angle-down':
      return <AngleDown className={className} {...props}/>;
    case 'angle-left':
      return <AngleLeft className={className} {...props}/>;
    case 'smile':
      return <Smile className={className} {...props}/>;
    case 'indian':
      return <Indian className={className} {...props}/>;
    case 'bell':
      return <Bell className={className} {...props}/>;
    case 'gear':
      return <Gear className={className} {...props}/>;
    case 'help':
      return <Help className={className} {...props}/>;
    case 'check':
      return <Check className={className} {...props}/>;
    case 'search':
      return <Search className={className} {...props}/>;
    case 'user':
      return <User className={className} {...props}/>;
    case 'whatsapp':
      return <Whatsapp className={className} {...props}/>;
    case 'arrow-left':
      return <ArrowLeft className={className} {...props}/>;
    case 'arrow-right':
      return <ArrowRight className={className} {...props}/>;
    case 'arrow-down':
      return <ArrowDown className={className} {...props}/>;
    case 'arrow-up':
      return <ArrowUp className={className} {...props}/>;
    case 'cross':
      return <Cross className={className} {...props}/>;
    case 'done':
      return <Done className={className} {...props}/>;
    case 'document':
      return <Document className={className} {...props}/>;
    case 'hamburger':
      return <Hamburger className={className} {...props}/>;
    case 'cart':
      return <Cart className={className} {...props}/>;
    case 'credit-card':
      return <CreditCard className={className} {...props}/>;
    case 'faq':
      return <Faq className={className} {...props}/>;
    case 'settings':
      return <Settings className={className} {...props}/>;
    case 'list-view':
      return <ListView className={className} {...props}/>;
    default:
      console.log(`Icon not found - ${name}`);
      return <div style={{ width: '14px', height: '14px', backgroundColor: 'gray', }} title={name}/>
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
