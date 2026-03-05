import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Inquiry = {
    id : Nat;
    name : Text;
    company : Text;
    country : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, company : Text, country : Text, email : Text, message : Text) : async Nat {
    let inquiry : Inquiry = {
      id = nextId;
      name;
      company;
      country;
      email;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextId, inquiry);
    nextId += 1;
    inquiry.id;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found.") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func searchInquiriesByName(searchText : Text) : async [Inquiry] {
    let filteredIter = inquiries.values().filter(
      func(inquiry) {
        inquiry.name.toLower().contains(#text(searchText.toLower()));
      }
    );
    filteredIter.toArray();
  };

  public query ({ caller }) func searchInquiriesByCompany(searchText : Text) : async [Inquiry] {
    let filteredIter = inquiries.values().filter(
      func(inquiry) {
        inquiry.company.toLower().contains(#text(searchText.toLower()));
      }
    );
    filteredIter.toArray();
  };
};
